package pers.yang.gradle.demo;

import pers.yang.gradle.file.FileIO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "fileDownload",urlPatterns = {"/ss/*"})
public class FileDownloadServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String filePath = this.getServletContext().getRealPath("/")+"js";
        String fileName = req.getPathInfo().substring(1);
        String path = filePath+"\\"+fileName;
        FileIO fileIO = new FileIO();
        // 制造延时
        try {
            Thread.currentThread().sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        fileIO.fileDownload(path,resp);
    }
}
