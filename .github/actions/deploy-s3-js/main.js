import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

function run() {

    //1) Get Inputs
    const bucketName = core.getInput('bucket', { required: true });
    const artifactPath = core.getInput('dist-folder', { required: true });
    const region = core.getInput('bucket-region');

    //2) Upload the artifacts to S3
    exec.exec(`ls -larnt`);
    exec.exec(`aws s3 cp ${artifactPath} s3://${bucketName}/dist/ --region ${region}`);

    //3) Log the upload process
    core.notice(`Uploading artifacts from ${artifactPath} to S3 bucket ${bucketName} in region ${region}`);

    //4) Output Variables
    const websiteUrl = `http://${bucketName}.s3-website-${region}.amazonaws.com/`;
    core.setOutput('website-url', websiteUrl);
    core.notice(`Artifacts uploaded successfully! Website URL: ${websiteUrl}`);
    
}

run();
