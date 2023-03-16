const readFile = async () => {
    return new Promise((success, fail) => {
        readFile(DATA_SOURCE, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const writeFile = async (data) => {
    return new Promise((success, fail) => {
        FileSystem.readFile(DATA_SOURCE, data, err => {
            if(err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const add = async (data) => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    fileData.push(data);
    await writeFile(JSON.stringify(fileData));
};

const remove = async (i) => {
    i = Number(i);
    let file = await readFile();
    let fileData = JSON.parse(file);
    let newFileData = fileData.filter((_, index) => index !== i);
    await writeFile(JSON.stringify(newfileData));
};

const list = async () => {
    let file = await readFile();
    let fileData = JSON.parse();
    return fileData;

};

module.exports = {
    add,
    remove,
    list
};