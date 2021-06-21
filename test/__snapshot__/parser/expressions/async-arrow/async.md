# Kataw parser test case

## Input

`````js
async (x?: number): any => x;
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
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 8,
                        "end": 9
                    },
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 17
                    },
                    "right": null,
                    "flags": 32,
                    "start": 7,
                    "end": 17
                }
            ],
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234252,
                    "flags": 2097216,
                    "start": 19,
                    "end": 23
                },
                "flags": 2097152,
                "start": 19,
                "end": 23
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "flags": 288,
            "start": 0,
            "end": 28
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 28,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async (x?: number): any => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

 (x?: number): any =>x, ; 
```

### Diagnostics

```javascript
✔ No errors
```

