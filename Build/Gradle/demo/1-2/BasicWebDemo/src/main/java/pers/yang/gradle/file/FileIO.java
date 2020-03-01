package pers.yang.gradle.file;


import javax.servlet.http.HttpServletResponse;
import java.io.*;

public class FileIO {
    public HttpServletResponse fileDownload(String path, HttpServletResponse resp){
        File file = new File(path);
        String fileName = file.getName();
        String ext = fileName.substring(fileName.lastIndexOf(".")+1).toUpperCase();
        try {
            InputStream fis = new BufferedInputStream(new FileInputStream(path));
            resp.reset();
            resp.setCharacterEncoding("UTF-8");
            resp.setContentType("application/octet-stream");
            resp.addHeader("Content-Disposition", "attachment;filename=" + new String(fileName.getBytes()));
            resp.addHeader("Content-Length", "" + file.length());
            OutputStream outputStream = new BufferedOutputStream(resp.getOutputStream());

            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len =fis.read(buffer))>0){
                outputStream.write(buffer,0,len);
            }
            fis.close();
            outputStream.flush();
            outputStream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  resp;
    }
}
