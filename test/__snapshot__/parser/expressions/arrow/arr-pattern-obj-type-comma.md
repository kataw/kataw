# Kataw parser test case

## Input

`````js
x = (x, {}:string) => {} ;
`````

## Options

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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 18,
                        "end": 21
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 9,
                                    "end": 9
                                },
                                "flags": 48,
                                "start": 7,
                                "end": 10
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 17
                            },
                            "right": null,
                            "flags": 32,
                            "start": 3,
                            "end": 17
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 23,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 24
                    },
                    "flags": 34,
                    "start": 3,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "x = (x, {}:string) => {} ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

x = (x, {}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

