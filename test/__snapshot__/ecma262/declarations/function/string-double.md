# Kataw parser test case

## Input

`````js
function createElement(tagName: "div"): HTMLDivElement {}
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
                "text": "createElement",
                "rawText": "createElement",
                "flags": 96,
                "start": 8,
                "end": 22
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "tagName",
                            "rawText": "tagName",
                            "flags": 96,
                            "start": 23,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "start": 23,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 23,
                "end": 30
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 37,
                    "end": 37
                },
                "flags": 32,
                "start": 37,
                "end": 37
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134217967,
                    "text": "div",
                    "rawText": "\"div\"",
                    "flags": 2097216,
                    "start": 31,
                    "end": 37
                },
                "flags": 2097152,
                "start": 31,
                "end": 37
            },
            "flags": 16,
            "start": 0,
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
            "kind": 124,
            "block": {
                "kind": 249,
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

```

### Diagnostics

```javascript
✖ ',' expected - start: 30, end: 31
✖ Missing an opening brace - '{ - start: 37, end: 38
✖ Declaration or statement expected - start: 38, end: 39
✖ Expected a `;` - start: 54, end: 56

```

