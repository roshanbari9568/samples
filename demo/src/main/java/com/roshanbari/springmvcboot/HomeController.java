package com.roshanbari.springmvcboot;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.roshanbari.springmvcboot.model.Aadat;

@Controller
public class HomeController 
{
	@ModelAttribute
	public void modeldata(Model m)
	{
		m.addAttribute("name","RoshanFreaks");
		
	}
	@RequestMapping("/")
public String home()
{
	return "index"; //Here i have not included extension cause i have used prefix and suffix through application properties
}
	@RequestMapping("add")
	public String add(@RequestParam("num1")int i,@RequestParam("num2")int j, Model m)
	{
		int num3=i+j;
		m.addAttribute("num3",num3);
		
		return "result";
	}
	@RequestMapping("addAadat")
	public String addAadat(@ModelAttribute Aadat a) //
	{
		
	return "result";
		
	}
}
