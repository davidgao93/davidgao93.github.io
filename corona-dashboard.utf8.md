---
title: "Coronavirus in United States"
author: "David Gao"
output: 
  flexdashboard::flex_dashboard:
    orientation: rows
    # social: ["facebook", "twitter", "linkedin"]
    # source_code: embed
    vertical_layout: fill
---



Summary
=======================================================================

Row {data-width=400}
-----------------------------------------------------------------------

### confirmed {.value-box}

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve8317c369e6858c05

### active {.value-box}

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve8f897ff8d5409381

<!-- ### recovered {.value-box} -->

<!-- ```{r} -->

<!-- valueBox( -->
<!--   value = paste(format(sum(df$recovered), big.mark = ","), "", sep = " "), -->
<!--   caption = "Recovery cases", -->
<!--   icon = "fas fa-smile", -->
<!--   color = recovered_color -->
<!-- ) -->
<!-- ``` -->

### recovered {.value-box}

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve5c5bac57fe398c5a

### death {.value-box}

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve779d09789d025c42

Row
-----------------------------------------------------------------------

### **Daily cumulative cases by type** (US only)

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve5f037b1870821559

Comparison
=======================================================================


Column {data-width=400}
-------------------------------------


### **Daily new cases**
    
<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preserve2910619217e41dff
 
### **Cumulative Cases vs Other Countries**

<div class="knitr-options" data-fig-width="576" data-fig-height="460"></div>
preservef98d762599ac6c49



<!-- Map -->
<!-- ======================================================================= -->

<!-- ### **World map of cases** (*use + and - icons to zoom in/out*) -->

<!-- ```{r} -->
<!-- # map tab added by Art Steinmetz -->
<!-- library(leaflet) -->
<!-- library(leafpop) -->
<!-- library(purrr) -->
<!-- cv_data_for_plot <- coronavirus %>% -->
<!--   dplyr::filter(cases > 0) %>% -->
<!--   dplyr::group_by(country, province, lat, long, type) %>% -->
<!--   dplyr::summarise(cases = sum(cases)) %>% -->
<!--   dplyr::mutate(log_cases = 2 * log(cases)) %>% -->
<!--   dplyr::ungroup() -->
<!-- cv_data_for_plot.split <- cv_data_for_plot %>% split(cv_data_for_plot$type) -->
<!-- pal <- colorFactor(c("orange", "red", "green"), domain = c("confirmed", "death", "recovered")) -->
<!-- map_object <- leaflet() %>% addProviderTiles(providers$Stamen.Toner) -->
<!-- names(cv_data_for_plot.split) %>% -->
<!--   purrr::walk(function(df) { -->
<!--     map_object <<- map_object %>% -->
<!--       addCircleMarkers( -->
<!--         data = cv_data_for_plot.split[[df]], -->
<!--         lng = ~Long, lat = ~Lat, -->
<!--         #                 label=~as.character(cases), -->
<!--         color = ~ pal(type), -->
<!--         stroke = FALSE, -->
<!--         fillOpacity = 0.8, -->
<!--         radius = ~log_cases, -->
<!--         popup = leafpop::popupTable(cv_data_for_plot.split[[df]], -->
<!--           feature.id = FALSE, -->
<!--           row.numbers = FALSE, -->
<!--           zcol = c("type", "cases", "country", "province") -->
<!--         ), -->
<!--         group = df, -->
<!--         #                 clusterOptions = markerClusterOptions(removeOutsideVisibleBounds = F), -->
<!--         labelOptions = labelOptions( -->
<!--           noHide = F, -->
<!--           direction = "auto" -->
<!--         ) -->
<!--       ) -->
<!--   }) -->

<!-- map_object %>% -->
<!--   addLayersControl( -->
<!--     overlayGroups = names(cv_data_for_plot.split), -->
<!--     options = layersControlOptions(collapsed = FALSE) -->
<!--   ) -->
<!-- ``` -->





About
=======================================================================

**The Coronavirus Dashboard - USA**

This dashboard is built with R using the R Markdown framework. It's hosted on Github.io with DNS Routing on AWS Route53.

The data is pulled every 24 hours, raw data pulled from the Johns Hopkins University Center for Systems Science and Engineering (JHU CCSE) Coronavirus [repository](https://github.com/RamiKrispin/coronavirus-csv){target="_blank"}.

**Update**

The data is as of Tuesday August 25, 2020 and the dashboard has been updated on Wednesday August 26, 2020.
