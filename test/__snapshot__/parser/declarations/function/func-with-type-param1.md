# Kataw parser test case

## Input

`````js
function foo<T,S>() {}
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 19,
                "end": 22
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 13,
                        "end": 14
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "S",
                            "rawText": "S",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 15,
                        "end": 16
                    }
                ],
                "flags": 0,
                "start": 12,
                "end": 17
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "function foo<T,S>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

function foo() {}
```

### Diagnostics

```javascript
✔ No errors
```

