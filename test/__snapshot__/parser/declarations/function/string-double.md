# Kataw parser test case

## Input

`````js
function createElement(tagName: "div"): HTMLDivElement {}
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
                "text": "createElement",
                "rawText": "createElement",
                "flags": 96,
                "start": 8,
                "end": 22
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "tagName",
                            "rawText": "tagName",
                            "flags": 96,
                            "start": 23,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 23,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 22,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 30,
                    "end": 30
                },
                "flags": 32,
                "start": 30,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "div",
                "rawText": "div",
                "flags": 96,
                "start": 31,
                "end": 37
            },
            "flags": 16,
            "start": 31,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "HTMLDivElement",
                "rawText": "HTMLDivElement",
                "flags": 96,
                "start": 39,
                "end": 54
            },
            "flags": 16,
            "start": 39,
            "end": 54
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 56,
                "end": 56
            },
            "flags": 16,
            "start": 54,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "function createElement(tagName: \"div\"): HTMLDivElement {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 30, end: 31
✖ Unexpected token. - start: 30, end: 31
✖ Statement expected - start: 30, end: 31
✖ Expected a `;` - start: 37, end: 38
✖ Statement expected - start: 37, end: 38
✖ Statement expected - start: 38, end: 39
✖ Expected a `;` - start: 54, end: 56

```

