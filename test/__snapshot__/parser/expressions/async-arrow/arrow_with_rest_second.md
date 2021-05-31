# Kataw parser test case

## Input

`````js
async (a, ...b) => a;
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
                "start": 15,
                "end": 18
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "start": 9,
                        "end": 13
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 32,
                    "start": 9,
                    "end": 14
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 290,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 20,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async (a, ...b) => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

async (a, ...) =>  a

```

### Diagnostics

```javascript
✔ No errors
```

