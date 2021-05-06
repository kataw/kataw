# Kataw parser test case

## Input

`````js
"use strict";
foo: function() {}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 13,
                    "end": 17
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 17,
                "end": 18
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 18,
                    "end": 27
                },
                "generatorToken": null,
                "name": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 27,
                    "end": 27
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 27,
                    "end": 29
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 18,
                "end": 32
            },
            "flags": 17,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "\"use strict\";\nfoo: function() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ In strict mode code or without web compability enabled, functions can only be declared at top level or inside a block - start: 18, end: 27
✖ Binding identifier expected - start: 27, end: 28

```

