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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 97,
                                    "start": 33,
                                    "end": 48
                                }
                            ],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "asterisk: \u000052",
                                        "rawText": "\"asterisk: \\052\"",
                                        "flags": 97,
                                        "start": 13,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 13,
                                    "end": 33
                                }
                            ],
                            "flags": 33,
                            "start": 13,
                            "end": 49
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 51
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 51
                },
                "flags": 32,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "(function() {\n  \"asterisk: \\052\";\n  \"use strict\";\n});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

