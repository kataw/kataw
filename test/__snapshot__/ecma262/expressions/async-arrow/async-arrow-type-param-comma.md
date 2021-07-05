# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
async <T, U>(x)=>y
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
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 0,
                            "end": 8
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 9,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 0,
                    "end": 11
                },
                "flags": 2097152,
                "start": 0,
                "end": 12
            },
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 15
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 15,
                "end": 17
            },
            "contents": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 17,
                "end": 18
            },
            "flags": 288,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "async <T, U>(x)=>y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

async <T, U>(x) => y
```

### Diagnostics

```javascript
✔ No errors
```

