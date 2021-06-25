# Kataw parser test case

## Input

`````js
function eval() { "use strict"; }

function arguments() { "use strict"; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "eval",
                "rawText": "eval",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 14
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
                            "flags": 96,
                            "start": 17,
                            "end": 30
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 31
                },
                "flags": 32,
                "start": 15,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 33,
                "end": 43
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "arguments",
                "rawText": "arguments",
                "flags": 96,
                "start": 43,
                "end": 53
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 54,
                "end": 54
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
                            "flags": 96,
                            "start": 57,
                            "end": 70
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "start": 57,
                    "end": 71
                },
                "flags": 32,
                "start": 55,
                "end": 73
            },
            "returnType": null,
            "flags": 16,
            "start": 33,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "function eval() { \"use strict\"; }\n\nfunction arguments() { \"use strict\"; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'eval' and 'arguments' cannot be used as an identifier here - start: 8, end: 17
✖ 'eval' and 'arguments' cannot be used as an identifier here - start: 43, end: 57

```

