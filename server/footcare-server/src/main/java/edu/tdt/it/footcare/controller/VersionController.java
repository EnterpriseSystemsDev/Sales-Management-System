package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.service.ProductVersionService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletRequest;
import java.util.List;

@RestController
@Setter(onMethod = @__(@Autowired))
@RequestMapping("/api/productVersions")
public class VersionController {
    private ProductVersionService productVersionService;

    @GetMapping
    public ResponseEntity<?> getAllVersions(ServletRequest request) {
        List<ProductVersion> versions;
        if (request.getParameterMap().containsKey("productId")) {
            versions = productVersionService.allVersionsOf(Long.parseLong(request.getParameter("productId")));
        } else {
            versions = productVersionService.getAll();
        }
        return ResponseEntity.ok(productVersionService.mapVersionsToResponses(versions));
    }

    @GetMapping("/{versionId}")
    public ResponseEntity<?> getVersion(@PathVariable long versionId) {
        ProductVersion productVersion = productVersionService.findByVersionId(versionId);
        return ResponseEntity.ok(productVersionService.createVersionResponse(productVersion));
    }
}
