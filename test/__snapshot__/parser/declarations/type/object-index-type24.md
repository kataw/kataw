# Kataw parser test case

## Input

`````js
type X = (x & {[x]:string});
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 290,
                    "type": {
                        "kind": 138,
                        "types": [
                            {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 11
                            },
                            {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "name": null,
                                        "key": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 19,
                                                "end": 25
                                            },
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 13,
                                "end": 26
                            }
                        ],
                        "flags": 2097152,
                        "start": 11,
                        "end": 26
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 27
                },
                "flags": 2097152,
                "start": 8,
                "end": 27
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type X = (x & {[x]:string});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

 type X = () 
```

### Diagnostics

```javascript
✔ No errors
```

