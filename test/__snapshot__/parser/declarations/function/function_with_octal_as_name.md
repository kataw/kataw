# Kataw parser test case

## Input

`````js
function 00004() { "use strict"; 00004; }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 8,
                "end": 8
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 8,
                "end": 8
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 201392130,
                    "text": 4,
                    "rawText": "00004",
                    "flags": 131168,
                    "start": 8,
                    "end": 14
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "flags": 268435488,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 8,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 18,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 32
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "00004",
                            "flags": 131168,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 39
            },
            "flags": 16,
            "start": 16,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function 00004() { \"use strict\"; 00004; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 8, end: 14
✖ Unexpected token. - start: 8, end: 14
✖ Expected a `;` - start: 16, end: 18

```

