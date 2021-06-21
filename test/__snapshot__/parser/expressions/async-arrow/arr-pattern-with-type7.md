# Kataw parser test case

## Input

`````js
async ([x: string = y, z: number]) =>  {};
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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 201,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 25,
                                        "end": 32
                                    },
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 32
                                },
                                "right": null,
                                "flags": 32,
                                "start": 22,
                                "end": 32
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 10,
                                        "end": 17
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 33
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 34,
                "end": 37
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 40,
                    "end": 40
                },
                "flags": 32,
                "start": 37,
                "end": 41
            },
            "flags": 290,
            "start": 0,
            "end": 41
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 41,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "async ([x: string = y, z: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

 ([z: number, x: string = y]) => {
} ; 
```

### Diagnostics

```javascript
✔ No errors
```

