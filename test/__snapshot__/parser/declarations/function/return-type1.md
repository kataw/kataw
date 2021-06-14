# Kataw parser test case

## Input

`````js
function x(): | a {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 19,
                    "end": 19
                },
                "flags": 32,
                "start": 17,
                "end": 20
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 139,
                    "bitwiseOrToken": {
                        "kind": 134251592,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 2097152,
                    "start": 13,
                    "end": 17
                },
                "flags": 2097152,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "function x(): | a {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

function x() {}
```

### Diagnostics

```javascript
✔ No errors
```

