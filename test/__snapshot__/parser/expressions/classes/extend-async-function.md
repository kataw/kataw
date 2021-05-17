# Kataw parser test case

## Input

`````js
(class extends async function(){}{})
`````

## Output

### CST

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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 1,
                        "end": 1
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 14,
                "end": 20
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 20,
                "end": 29
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 29,
                "end": 29
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 29,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 32,
                    "end": 32
                },
                "flags": 32,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 14,
            "end": 33
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "start": 33,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(class extends async function(){}{})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 6, end: 14
✖ Binding identifier expected - start: 29, end: 30
✖ Declaration or statement expected - start: 35, end: 36

```

