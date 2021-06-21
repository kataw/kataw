# Kataw parser test case

## Input

`````js
async () => (await 5) ** 6;
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
            "parameters": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "contents": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 208,
                        "awaitKeyword": {
                            "kind": 82196,
                            "flags": 64,
                            "start": 13,
                            "end": 18
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "start": 21,
                    "end": 24
                },
                "right": {
                    "kind": 201392130,
                    "text": 6,
                    "rawText": "6",
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "flags": 32,
                "start": 11,
                "end": 26
            },
            "flags": 288,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async () => (await 5) ** 6;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

 () =>(await 5) ** 6, ; 
```

### Diagnostics

```javascript
✔ No errors
```

