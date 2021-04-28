# Kataw parser test case

## Input

`````js
function foo<T>() {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 15,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 19
                },
                "flags": 256,
                "start": 17,
                "end": 20
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 0,
                "start": 12,
                "end": 15
            },
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "function foo<T>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

