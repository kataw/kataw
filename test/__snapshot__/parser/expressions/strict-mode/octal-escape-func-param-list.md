# Kataw parser test case

## Input

`````js
function foo(p\141ckage) { "use strict"; }
`````

## Output

### Hybrid CST

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
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 13,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 14,
                    "end": 14
                },
                "flags": 32,
                "start": 14,
                "end": 14
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 141,
                "rawText": "141",
                "flags": 96,
                "start": 15,
                "end": 18
            },
            "flags": 16,
            "start": 15,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "ckage",
                "rawText": "ckage",
                "flags": 96,
                "start": 18,
                "end": 23
            },
            "flags": 16,
            "start": 18,
            "end": 23
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 26,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 40
            },
            "flags": 16,
            "start": 24,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function foo(p\\141ckage) { \"use strict\"; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 13, end: 14
✖ Invalid hexadecimal escape sequence - start: 14, end: 14
✖ ',' expected - start: 14, end: 15
✖ Expected a ')' to match the '(' token here - start: 14, end: 15
✖ Unexpected token. - start: 14, end: 15
✖ Declaration or statement expected - start: 14, end: 15
✖ Unexpected token. - start: 15, end: 18
✖ Expected a `;` - start: 18, end: 23
✖ Expected a `;` - start: 23, end: 24
✖ Declaration or statement expected - start: 23, end: 24

```

