/*--------------------------------------------------------------------------------------------------------|  www.vdm.io  |------/
    __      __       _     _____                 _                                  _     __  __      _   _               _
    \ \    / /      | |   |  __ \               | |                                | |   |  \/  |    | | | |             | |
     \ \  / /_ _ ___| |_  | |  | | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_  | \  / | ___| |_| |__   ___   __| |
      \ \/ / _` / __| __| | |  | |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __| | |\/| |/ _ \ __| '_ \ / _ \ / _` |
       \  / (_| \__ \ |_  | |__| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_  | |  | |  __/ |_| | | | (_) | (_| |
        \/ \__,_|___/\__| |_____/ \___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__| |_|  |_|\___|\__|_| |_|\___/ \__,_|
                                                        | |                                                                 
                                                        |_| 				
/-------------------------------------------------------------------------------------------------------------------------------/

	@version		@update number 355 of this MVC
	@build			21st August, 2017
	@created		6th May, 2015
	@package		Component Builder
	@subpackage		joomla_component.js
	@author			Llewellyn van der Merwe <http://vdm.bz/component-builder>	
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html 
	
	Builds Complex Joomla Components 
                                                             
/-----------------------------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_vvvvvvvvvv_required = false;
jform_vvvvvvwvvw_required = false;
jform_vvvvvvxvvx_required = false;
jform_vvvvvvyvvy_required = false;
jform_vvvvvvzvvz_required = false;
jform_vvvvvwbvwa_required = false;
jform_vvvvvwcvwb_required = false;
jform_vvvvvwdvwc_required = false;
jform_vvvvvwevwd_required = false;
jform_vvvvvwivwe_required = false;
jform_vvvvvwjvwf_required = false;
jform_vvvvvwkvwg_required = false;
jform_vvvvvwlvwh_required = false;
jform_vvvvvwmvwi_required = false;
jform_vvvvvwnvwj_required = false;
jform_vvvvvwuvwk_required = false;
jform_vvvvvwvvwl_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var add_php_helper_admin_vvvvvvv = jQuery("#jform_add_php_helper_admin input[type='radio']:checked").val();
	vvvvvvv(add_php_helper_admin_vvvvvvv);

	var add_php_helper_site_vvvvvvw = jQuery("#jform_add_php_helper_site input[type='radio']:checked").val();
	vvvvvvw(add_php_helper_site_vvvvvvw);

	var add_php_helper_both_vvvvvvx = jQuery("#jform_add_php_helper_both input[type='radio']:checked").val();
	vvvvvvx(add_php_helper_both_vvvvvvx);

	var add_css_vvvvvvy = jQuery("#jform_add_css input[type='radio']:checked").val();
	vvvvvvy(add_css_vvvvvvy);

	var add_sql_vvvvvvz = jQuery("#jform_add_sql input[type='radio']:checked").val();
	vvvvvvz(add_sql_vvvvvvz);

	var emptycontributors_vvvvvwa = jQuery("#jform_emptycontributors input[type='radio']:checked").val();
	vvvvvwa(emptycontributors_vvvvvwa);

	var add_license_vvvvvwb = jQuery("#jform_add_license input[type='radio']:checked").val();
	vvvvvwb(add_license_vvvvvwb);

	var add_admin_event_vvvvvwc = jQuery("#jform_add_admin_event input[type='radio']:checked").val();
	vvvvvwc(add_admin_event_vvvvvwc);

	var add_site_event_vvvvvwd = jQuery("#jform_add_site_event input[type='radio']:checked").val();
	vvvvvwd(add_site_event_vvvvvwd);

	var addreadme_vvvvvwe = jQuery("#jform_addreadme input[type='radio']:checked").val();
	vvvvvwe(addreadme_vvvvvwe);

	var add_update_server_vvvvvwf = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	vvvvvwf(add_update_server_vvvvvwf);

	var add_sales_server_vvvvvwg = jQuery("#jform_add_sales_server input[type='radio']:checked").val();
	vvvvvwg(add_sales_server_vvvvvwg);

	var add_license_vvvvvwh = jQuery("#jform_add_license input[type='radio']:checked").val();
	vvvvvwh(add_license_vvvvvwh);

	var add_php_dashboard_methods_vvvvvwi = jQuery("#jform_add_php_dashboard_methods input[type='radio']:checked").val();
	vvvvvwi(add_php_dashboard_methods_vvvvvwi);

	var add_php_postflight_install_vvvvvwj = jQuery("#jform_add_php_postflight_install input[type='radio']:checked").val();
	vvvvvwj(add_php_postflight_install_vvvvvwj);

	var add_php_postflight_update_vvvvvwk = jQuery("#jform_add_php_postflight_update input[type='radio']:checked").val();
	vvvvvwk(add_php_postflight_update_vvvvvwk);

	var add_php_method_uninstall_vvvvvwl = jQuery("#jform_add_php_method_uninstall input[type='radio']:checked").val();
	vvvvvwl(add_php_method_uninstall_vvvvvwl);

	var add_php_preflight_install_vvvvvwm = jQuery("#jform_add_php_preflight_install input[type='radio']:checked").val();
	vvvvvwm(add_php_preflight_install_vvvvvwm);

	var add_php_preflight_update_vvvvvwn = jQuery("#jform_add_php_preflight_update input[type='radio']:checked").val();
	vvvvvwn(add_php_preflight_update_vvvvvwn);

	var update_server_target_vvvvvwo = jQuery("#jform_update_server_target input[type='radio']:checked").val();
	var add_update_server_vvvvvwo = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	vvvvvwo(update_server_target_vvvvvwo,add_update_server_vvvvvwo);

	var add_update_server_vvvvvwp = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	var update_server_target_vvvvvwp = jQuery("#jform_update_server_target input[type='radio']:checked").val();
	vvvvvwp(add_update_server_vvvvvwp,update_server_target_vvvvvwp);

	var update_server_target_vvvvvwq = jQuery("#jform_update_server_target input[type='radio']:checked").val();
	var add_update_server_vvvvvwq = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	vvvvvwq(update_server_target_vvvvvwq,add_update_server_vvvvvwq);

	var update_server_target_vvvvvws = jQuery("#jform_update_server_target input[type='radio']:checked").val();
	var add_update_server_vvvvvws = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	vvvvvws(update_server_target_vvvvvws,add_update_server_vvvvvws);

	var add_update_server_vvvvvwu = jQuery("#jform_add_update_server input[type='radio']:checked").val();
	vvvvvwu(add_update_server_vvvvvwu);

	var buildcomp_vvvvvwv = jQuery("#jform_buildcomp input[type='radio']:checked").val();
	vvvvvwv(buildcomp_vvvvvwv);
});

// the vvvvvvv function
function vvvvvvv(add_php_helper_admin_vvvvvvv)
{
	// set the function logic
	if (add_php_helper_admin_vvvvvvv == 1)
	{
		jQuery('#jform_php_helper_admin').closest('.control-group').show();
		if (jform_vvvvvvvvvv_required)
		{
			updateFieldRequired('php_helper_admin',0);
			jQuery('#jform_php_helper_admin').prop('required','required');
			jQuery('#jform_php_helper_admin').attr('aria-required',true);
			jQuery('#jform_php_helper_admin').addClass('required');
			jform_vvvvvvvvvv_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_helper_admin').closest('.control-group').hide();
		if (!jform_vvvvvvvvvv_required)
		{
			updateFieldRequired('php_helper_admin',1);
			jQuery('#jform_php_helper_admin').removeAttr('required');
			jQuery('#jform_php_helper_admin').removeAttr('aria-required');
			jQuery('#jform_php_helper_admin').removeClass('required');
			jform_vvvvvvvvvv_required = true;
		}
	}
}

// the vvvvvvw function
function vvvvvvw(add_php_helper_site_vvvvvvw)
{
	// set the function logic
	if (add_php_helper_site_vvvvvvw == 1)
	{
		jQuery('#jform_php_helper_site').closest('.control-group').show();
		if (jform_vvvvvvwvvw_required)
		{
			updateFieldRequired('php_helper_site',0);
			jQuery('#jform_php_helper_site').prop('required','required');
			jQuery('#jform_php_helper_site').attr('aria-required',true);
			jQuery('#jform_php_helper_site').addClass('required');
			jform_vvvvvvwvvw_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_helper_site').closest('.control-group').hide();
		if (!jform_vvvvvvwvvw_required)
		{
			updateFieldRequired('php_helper_site',1);
			jQuery('#jform_php_helper_site').removeAttr('required');
			jQuery('#jform_php_helper_site').removeAttr('aria-required');
			jQuery('#jform_php_helper_site').removeClass('required');
			jform_vvvvvvwvvw_required = true;
		}
	}
}

// the vvvvvvx function
function vvvvvvx(add_php_helper_both_vvvvvvx)
{
	// set the function logic
	if (add_php_helper_both_vvvvvvx == 1)
	{
		jQuery('#jform_php_helper_both').closest('.control-group').show();
		if (jform_vvvvvvxvvx_required)
		{
			updateFieldRequired('php_helper_both',0);
			jQuery('#jform_php_helper_both').prop('required','required');
			jQuery('#jform_php_helper_both').attr('aria-required',true);
			jQuery('#jform_php_helper_both').addClass('required');
			jform_vvvvvvxvvx_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_helper_both').closest('.control-group').hide();
		if (!jform_vvvvvvxvvx_required)
		{
			updateFieldRequired('php_helper_both',1);
			jQuery('#jform_php_helper_both').removeAttr('required');
			jQuery('#jform_php_helper_both').removeAttr('aria-required');
			jQuery('#jform_php_helper_both').removeClass('required');
			jform_vvvvvvxvvx_required = true;
		}
	}
}

// the vvvvvvy function
function vvvvvvy(add_css_vvvvvvy)
{
	// set the function logic
	if (add_css_vvvvvvy == 1)
	{
		jQuery('#jform_css').closest('.control-group').show();
		if (jform_vvvvvvyvvy_required)
		{
			updateFieldRequired('css',0);
			jQuery('#jform_css').prop('required','required');
			jQuery('#jform_css').attr('aria-required',true);
			jQuery('#jform_css').addClass('required');
			jform_vvvvvvyvvy_required = false;
		}

	}
	else
	{
		jQuery('#jform_css').closest('.control-group').hide();
		if (!jform_vvvvvvyvvy_required)
		{
			updateFieldRequired('css',1);
			jQuery('#jform_css').removeAttr('required');
			jQuery('#jform_css').removeAttr('aria-required');
			jQuery('#jform_css').removeClass('required');
			jform_vvvvvvyvvy_required = true;
		}
	}
}

// the vvvvvvz function
function vvvvvvz(add_sql_vvvvvvz)
{
	// set the function logic
	if (add_sql_vvvvvvz == 1)
	{
		jQuery('#jform_sql').closest('.control-group').show();
		if (jform_vvvvvvzvvz_required)
		{
			updateFieldRequired('sql',0);
			jQuery('#jform_sql').prop('required','required');
			jQuery('#jform_sql').attr('aria-required',true);
			jQuery('#jform_sql').addClass('required');
			jform_vvvvvvzvvz_required = false;
		}

	}
	else
	{
		jQuery('#jform_sql').closest('.control-group').hide();
		if (!jform_vvvvvvzvvz_required)
		{
			updateFieldRequired('sql',1);
			jQuery('#jform_sql').removeAttr('required');
			jQuery('#jform_sql').removeAttr('aria-required');
			jQuery('#jform_sql').removeClass('required');
			jform_vvvvvvzvvz_required = true;
		}
	}
}

// the vvvvvwa function
function vvvvvwa(emptycontributors_vvvvvwa)
{
	// set the function logic
	if (emptycontributors_vvvvvwa == 1)
	{
		jQuery('#jform_number').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_number').closest('.control-group').hide();
	}
}

// the vvvvvwb function
function vvvvvwb(add_license_vvvvvwb)
{
	// set the function logic
	if (add_license_vvvvvwb == 1)
	{
		jQuery('#jform_license_type').closest('.control-group').show();
		if (jform_vvvvvwbvwa_required)
		{
			updateFieldRequired('license_type',0);
			jQuery('#jform_license_type').prop('required','required');
			jQuery('#jform_license_type').attr('aria-required',true);
			jQuery('#jform_license_type').addClass('required');
			jform_vvvvvwbvwa_required = false;
		}

	}
	else
	{
		jQuery('#jform_license_type').closest('.control-group').hide();
		if (!jform_vvvvvwbvwa_required)
		{
			updateFieldRequired('license_type',1);
			jQuery('#jform_license_type').removeAttr('required');
			jQuery('#jform_license_type').removeAttr('aria-required');
			jQuery('#jform_license_type').removeClass('required');
			jform_vvvvvwbvwa_required = true;
		}
	}
}

// the vvvvvwc function
function vvvvvwc(add_admin_event_vvvvvwc)
{
	// set the function logic
	if (add_admin_event_vvvvvwc == 1)
	{
		jQuery('#jform_php_admin_event').closest('.control-group').show();
		if (jform_vvvvvwcvwb_required)
		{
			updateFieldRequired('php_admin_event',0);
			jQuery('#jform_php_admin_event').prop('required','required');
			jQuery('#jform_php_admin_event').attr('aria-required',true);
			jQuery('#jform_php_admin_event').addClass('required');
			jform_vvvvvwcvwb_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_admin_event').closest('.control-group').hide();
		if (!jform_vvvvvwcvwb_required)
		{
			updateFieldRequired('php_admin_event',1);
			jQuery('#jform_php_admin_event').removeAttr('required');
			jQuery('#jform_php_admin_event').removeAttr('aria-required');
			jQuery('#jform_php_admin_event').removeClass('required');
			jform_vvvvvwcvwb_required = true;
		}
	}
}

// the vvvvvwd function
function vvvvvwd(add_site_event_vvvvvwd)
{
	// set the function logic
	if (add_site_event_vvvvvwd == 1)
	{
		jQuery('#jform_php_site_event').closest('.control-group').show();
		if (jform_vvvvvwdvwc_required)
		{
			updateFieldRequired('php_site_event',0);
			jQuery('#jform_php_site_event').prop('required','required');
			jQuery('#jform_php_site_event').attr('aria-required',true);
			jQuery('#jform_php_site_event').addClass('required');
			jform_vvvvvwdvwc_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_site_event').closest('.control-group').hide();
		if (!jform_vvvvvwdvwc_required)
		{
			updateFieldRequired('php_site_event',1);
			jQuery('#jform_php_site_event').removeAttr('required');
			jQuery('#jform_php_site_event').removeAttr('aria-required');
			jQuery('#jform_php_site_event').removeClass('required');
			jform_vvvvvwdvwc_required = true;
		}
	}
}

// the vvvvvwe function
function vvvvvwe(addreadme_vvvvvwe)
{
	// set the function logic
	if (addreadme_vvvvvwe == 1)
	{
		jQuery('.note_readme').closest('.control-group').show();
		jQuery('#jform_readme-lbl').closest('.control-group').show();
		if (jform_vvvvvwevwd_required)
		{
			updateFieldRequired('readme',0);
			jQuery('#jform_readme').prop('required','required');
			jQuery('#jform_readme').attr('aria-required',true);
			jQuery('#jform_readme').addClass('required');
			jform_vvvvvwevwd_required = false;
		}

	}
	else
	{
		jQuery('.note_readme').closest('.control-group').hide();
		jQuery('#jform_readme-lbl').closest('.control-group').hide();
		if (!jform_vvvvvwevwd_required)
		{
			updateFieldRequired('readme',1);
			jQuery('#jform_readme').removeAttr('required');
			jQuery('#jform_readme').removeAttr('aria-required');
			jQuery('#jform_readme').removeClass('required');
			jform_vvvvvwevwd_required = true;
		}
	}
}

// the vvvvvwf function
function vvvvvwf(add_update_server_vvvvvwf)
{
	// set the function logic
	if (add_update_server_vvvvvwf == 1)
	{
		jQuery('#jform_update_server').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_update_server').closest('.control-group').hide();
	}
}

// the vvvvvwg function
function vvvvvwg(add_sales_server_vvvvvwg)
{
	// set the function logic
	if (add_sales_server_vvvvvwg == 1)
	{
		jQuery('#jform_sales_server_ftp').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_sales_server_ftp').closest('.control-group').hide();
	}
}

// the vvvvvwh function
function vvvvvwh(add_license_vvvvvwh)
{
	// set the function logic
	if (add_license_vvvvvwh == 1)
	{
		jQuery('.note_whmcs_lisencing_note').closest('.control-group').show();
		jQuery('#jform_whmcs_key').closest('.control-group').show();
		jQuery('#jform_whmcs_url').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_whmcs_lisencing_note').closest('.control-group').hide();
		jQuery('#jform_whmcs_key').closest('.control-group').hide();
		jQuery('#jform_whmcs_url').closest('.control-group').hide();
	}
}

// the vvvvvwi function
function vvvvvwi(add_php_dashboard_methods_vvvvvwi)
{
	// set the function logic
	if (add_php_dashboard_methods_vvvvvwi == 1)
	{
		jQuery('#jform_dashboard_tab').closest('.control-group').show();
		jQuery('#jform_php_dashboard_methods').closest('.control-group').show();
		if (jform_vvvvvwivwe_required)
		{
			updateFieldRequired('php_dashboard_methods',0);
			jQuery('#jform_php_dashboard_methods').prop('required','required');
			jQuery('#jform_php_dashboard_methods').attr('aria-required',true);
			jQuery('#jform_php_dashboard_methods').addClass('required');
			jform_vvvvvwivwe_required = false;
		}

	}
	else
	{
		jQuery('#jform_dashboard_tab').closest('.control-group').hide();
		jQuery('#jform_php_dashboard_methods').closest('.control-group').hide();
		if (!jform_vvvvvwivwe_required)
		{
			updateFieldRequired('php_dashboard_methods',1);
			jQuery('#jform_php_dashboard_methods').removeAttr('required');
			jQuery('#jform_php_dashboard_methods').removeAttr('aria-required');
			jQuery('#jform_php_dashboard_methods').removeClass('required');
			jform_vvvvvwivwe_required = true;
		}
	}
}

// the vvvvvwj function
function vvvvvwj(add_php_postflight_install_vvvvvwj)
{
	// set the function logic
	if (add_php_postflight_install_vvvvvwj == 1)
	{
		jQuery('#jform_php_postflight_install').closest('.control-group').show();
		if (jform_vvvvvwjvwf_required)
		{
			updateFieldRequired('php_postflight_install',0);
			jQuery('#jform_php_postflight_install').prop('required','required');
			jQuery('#jform_php_postflight_install').attr('aria-required',true);
			jQuery('#jform_php_postflight_install').addClass('required');
			jform_vvvvvwjvwf_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_postflight_install').closest('.control-group').hide();
		if (!jform_vvvvvwjvwf_required)
		{
			updateFieldRequired('php_postflight_install',1);
			jQuery('#jform_php_postflight_install').removeAttr('required');
			jQuery('#jform_php_postflight_install').removeAttr('aria-required');
			jQuery('#jform_php_postflight_install').removeClass('required');
			jform_vvvvvwjvwf_required = true;
		}
	}
}

// the vvvvvwk function
function vvvvvwk(add_php_postflight_update_vvvvvwk)
{
	// set the function logic
	if (add_php_postflight_update_vvvvvwk == 1)
	{
		jQuery('#jform_php_postflight_update').closest('.control-group').show();
		if (jform_vvvvvwkvwg_required)
		{
			updateFieldRequired('php_postflight_update',0);
			jQuery('#jform_php_postflight_update').prop('required','required');
			jQuery('#jform_php_postflight_update').attr('aria-required',true);
			jQuery('#jform_php_postflight_update').addClass('required');
			jform_vvvvvwkvwg_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_postflight_update').closest('.control-group').hide();
		if (!jform_vvvvvwkvwg_required)
		{
			updateFieldRequired('php_postflight_update',1);
			jQuery('#jform_php_postflight_update').removeAttr('required');
			jQuery('#jform_php_postflight_update').removeAttr('aria-required');
			jQuery('#jform_php_postflight_update').removeClass('required');
			jform_vvvvvwkvwg_required = true;
		}
	}
}

// the vvvvvwl function
function vvvvvwl(add_php_method_uninstall_vvvvvwl)
{
	// set the function logic
	if (add_php_method_uninstall_vvvvvwl == 1)
	{
		jQuery('#jform_php_method_uninstall').closest('.control-group').show();
		if (jform_vvvvvwlvwh_required)
		{
			updateFieldRequired('php_method_uninstall',0);
			jQuery('#jform_php_method_uninstall').prop('required','required');
			jQuery('#jform_php_method_uninstall').attr('aria-required',true);
			jQuery('#jform_php_method_uninstall').addClass('required');
			jform_vvvvvwlvwh_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_method_uninstall').closest('.control-group').hide();
		if (!jform_vvvvvwlvwh_required)
		{
			updateFieldRequired('php_method_uninstall',1);
			jQuery('#jform_php_method_uninstall').removeAttr('required');
			jQuery('#jform_php_method_uninstall').removeAttr('aria-required');
			jQuery('#jform_php_method_uninstall').removeClass('required');
			jform_vvvvvwlvwh_required = true;
		}
	}
}

// the vvvvvwm function
function vvvvvwm(add_php_preflight_install_vvvvvwm)
{
	// set the function logic
	if (add_php_preflight_install_vvvvvwm == 1)
	{
		jQuery('#jform_php_preflight_install').closest('.control-group').show();
		if (jform_vvvvvwmvwi_required)
		{
			updateFieldRequired('php_preflight_install',0);
			jQuery('#jform_php_preflight_install').prop('required','required');
			jQuery('#jform_php_preflight_install').attr('aria-required',true);
			jQuery('#jform_php_preflight_install').addClass('required');
			jform_vvvvvwmvwi_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_preflight_install').closest('.control-group').hide();
		if (!jform_vvvvvwmvwi_required)
		{
			updateFieldRequired('php_preflight_install',1);
			jQuery('#jform_php_preflight_install').removeAttr('required');
			jQuery('#jform_php_preflight_install').removeAttr('aria-required');
			jQuery('#jform_php_preflight_install').removeClass('required');
			jform_vvvvvwmvwi_required = true;
		}
	}
}

// the vvvvvwn function
function vvvvvwn(add_php_preflight_update_vvvvvwn)
{
	// set the function logic
	if (add_php_preflight_update_vvvvvwn == 1)
	{
		jQuery('#jform_php_preflight_update').closest('.control-group').show();
		if (jform_vvvvvwnvwj_required)
		{
			updateFieldRequired('php_preflight_update',0);
			jQuery('#jform_php_preflight_update').prop('required','required');
			jQuery('#jform_php_preflight_update').attr('aria-required',true);
			jQuery('#jform_php_preflight_update').addClass('required');
			jform_vvvvvwnvwj_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_preflight_update').closest('.control-group').hide();
		if (!jform_vvvvvwnvwj_required)
		{
			updateFieldRequired('php_preflight_update',1);
			jQuery('#jform_php_preflight_update').removeAttr('required');
			jQuery('#jform_php_preflight_update').removeAttr('aria-required');
			jQuery('#jform_php_preflight_update').removeClass('required');
			jform_vvvvvwnvwj_required = true;
		}
	}
}

// the vvvvvwo function
function vvvvvwo(update_server_target_vvvvvwo,add_update_server_vvvvvwo)
{
	// set the function logic
	if (update_server_target_vvvvvwo == 1 && add_update_server_vvvvvwo == 1)
	{
		jQuery('#jform_update_server_ftp').closest('.control-group').show();
		jQuery('.note_update_server_note_ftp').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_update_server_ftp').closest('.control-group').hide();
		jQuery('.note_update_server_note_ftp').closest('.control-group').hide();
	}
}

// the vvvvvwp function
function vvvvvwp(add_update_server_vvvvvwp,update_server_target_vvvvvwp)
{
	// set the function logic
	if (add_update_server_vvvvvwp == 1 && update_server_target_vvvvvwp == 1)
	{
		jQuery('#jform_update_server_ftp').closest('.control-group').show();
		jQuery('.note_update_server_note_ftp').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_update_server_ftp').closest('.control-group').hide();
		jQuery('.note_update_server_note_ftp').closest('.control-group').hide();
	}
}

// the vvvvvwq function
function vvvvvwq(update_server_target_vvvvvwq,add_update_server_vvvvvwq)
{
	// set the function logic
	if (update_server_target_vvvvvwq == 2 && add_update_server_vvvvvwq == 1)
	{
		jQuery('.note_update_server_note_zip').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_update_server_note_zip').closest('.control-group').hide();
	}
}

// the vvvvvws function
function vvvvvws(update_server_target_vvvvvws,add_update_server_vvvvvws)
{
	// set the function logic
	if (update_server_target_vvvvvws == 3 && add_update_server_vvvvvws == 1)
	{
		jQuery('.note_update_server_note_other').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_update_server_note_other').closest('.control-group').hide();
	}
}

// the vvvvvwu function
function vvvvvwu(add_update_server_vvvvvwu)
{
	// set the function logic
	if (add_update_server_vvvvvwu == 1)
	{
		jQuery('#jform_update_server_target').closest('.control-group').show();
		if (jform_vvvvvwuvwk_required)
		{
			updateFieldRequired('update_server_target',0);
			jQuery('#jform_update_server_target').prop('required','required');
			jQuery('#jform_update_server_target').attr('aria-required',true);
			jQuery('#jform_update_server_target').addClass('required');
			jform_vvvvvwuvwk_required = false;
		}

	}
	else
	{
		jQuery('#jform_update_server_target').closest('.control-group').hide();
		if (!jform_vvvvvwuvwk_required)
		{
			updateFieldRequired('update_server_target',1);
			jQuery('#jform_update_server_target').removeAttr('required');
			jQuery('#jform_update_server_target').removeAttr('aria-required');
			jQuery('#jform_update_server_target').removeClass('required');
			jform_vvvvvwuvwk_required = true;
		}
	}
}

// the vvvvvwv function
function vvvvvwv(buildcomp_vvvvvwv)
{
	// set the function logic
	if (buildcomp_vvvvvwv == 1)
	{
		jQuery('#jform_buildcompsql').closest('.control-group').show();
		if (jform_vvvvvwvvwl_required)
		{
			updateFieldRequired('buildcompsql',0);
			jQuery('#jform_buildcompsql').prop('required','required');
			jQuery('#jform_buildcompsql').attr('aria-required',true);
			jQuery('#jform_buildcompsql').addClass('required');
			jform_vvvvvwvvwl_required = false;
		}

	}
	else
	{
		jQuery('#jform_buildcompsql').closest('.control-group').hide();
		if (!jform_vvvvvwvvwl_required)
		{
			updateFieldRequired('buildcompsql',1);
			jQuery('#jform_buildcompsql').removeAttr('required');
			jQuery('#jform_buildcompsql').removeAttr('aria-required');
			jQuery('#jform_buildcompsql').removeClass('required');
			jform_vvvvvwvvwl_required = true;
		}
	}
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
