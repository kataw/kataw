# Kataw parser test case

## Input

`````js
({}: string, [0]?: number): unknown =>0;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "typeParameters": null,
                "parameters": [
                    [
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
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 48,
                                "start": 1,
                                "end": 3
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 4,
                                    "end": 11
                                },
                                "flags": 0,
                                "start": 3,
                                "end": 11
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 11
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 16
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 16,
                                "end": 17
                            },
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 18,
                                    "end": 25
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 25
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 25
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": {
                    "kind": 139,
                    "type": {
                        "kind": 134234255,
                        "flags": 64,
                        "start": 27,
                        "end": 35
                    },
                    "flags": 0,
                    "start": 26,
                    "end": 35
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 38,
                    "end": 39
                },
                "flags": 34,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({}: string, [0]?: number): unknown =>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

() =>  0;
```

### Diagnostics

```javascript
✔ No errors
```

