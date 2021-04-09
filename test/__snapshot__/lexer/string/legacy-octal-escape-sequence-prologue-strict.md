# Kataw parser test case

## Input

`````js
(function() {
  "asterisk: \052";
  "use strict";
});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 11
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 67174403,
                                        "value": "asterisk: \u000052",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 32
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 13,
                                    "end": 33
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 67174403,
                                        "value": "use strict",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 33,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 33,
                                    "end": 49
                                }
                            ],
                            "multiline": true,
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 51
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "(function() {\n  \"asterisk: \\052\";\n  \"use strict\";\n});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

