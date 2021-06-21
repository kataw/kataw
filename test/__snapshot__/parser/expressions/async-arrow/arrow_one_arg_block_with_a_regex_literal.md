# Kataw parser test case

## Input

`````js
async (x)=>{/x/}
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 9,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 221,
                                "text": "/x/",
                                "flags": 96,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 15
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 15
                },
                "flags": 32,
                "start": 11,
                "end": 16
            },
            "flags": 288,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async (x)=>{/x/}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

 (x) => {
;
} 
```

### Diagnostics

```javascript
✔ No errors
```

