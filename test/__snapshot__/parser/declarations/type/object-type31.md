# Kataw parser test case

## Input

`````js
type x = { get (): string }
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
                "text": "x",
                "rawText": "x",
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
                            "text": "get",
                            "rawText": "get",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 16,
                                "end": 16
                            },
                            "returnType": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 18,
                                "end": 25
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 14,
                            "end": 25
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 27
            },
            "flags": 2097152,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type x = { get (): string }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

