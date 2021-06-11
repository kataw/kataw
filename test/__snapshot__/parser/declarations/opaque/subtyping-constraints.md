# Kataw parser test case

## Input

`````js
opaque type Good: {x: string} = {x: string, y: number};
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
            "kind": 269,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Good",
                "rawText": "Good",
                "flags": 96,
                "start": 11,
                "end": 16
            },
            "typeParameters": null,
            "superType": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 21,
                            "end": 28
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 28
                    }
                ],
                "flags": 0,
                "start": 17,
                "end": 29
            },
            "impltype": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 33,
                            "end": 34
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 35,
                            "end": 42
                        },
                        "flags": 0,
                        "start": 33,
                        "end": 43
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 43,
                            "end": 45
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 46,
                            "end": 53
                        },
                        "flags": 0,
                        "start": 43,
                        "end": 53
                    }
                ],
                "flags": 0,
                "start": 31,
                "end": 54
            },
            "flags": 0,
            "start": 0,
            "end": 54
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 54,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "opaque type Good: {x: string} = {x: string, y: number};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

