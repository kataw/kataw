# Kataw parser test case

## Input

`````js
async (s: any) => x
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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "s",
                        "rawText": "s",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234252,
                            "flags": 2097216,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 2097152,
                        "start": 9,
                        "end": 13
                    },
                    "right": null,
                    "flags": 32,
                    "start": 7,
                    "end": 13
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "flags": 288,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "async (s: any) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

async (s) =>  x
```

### Diagnostics

```javascript
✔ No errors
```

