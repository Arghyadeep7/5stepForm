

function getFileData(file: File): Promise<string> {

    return new Promise((resolve, reject) => {

      const reader = new FileReader();
  
      reader.onload = () => {
        const bin = reader.result as string;
        resolve(bin);
      };
  
      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };
  
      return reader.readAsBinaryString(file);

    });

};

const FileService = async (file: File) => {
    const bin = await getFileData(file);



    const name = file.name;

    return {name, bin};
};

export default FileService;