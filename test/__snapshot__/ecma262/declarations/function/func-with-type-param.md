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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                            "flags": 2097152,
                            "start": 13,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 13,
                    "end": 14
                },
                "flags": 2097152,
                "start": 12,
                "end": 15
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
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
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "function foo<T>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

function  <T >foo() {}
```

### Diagnostics

```javascript
✔ No errors
```

