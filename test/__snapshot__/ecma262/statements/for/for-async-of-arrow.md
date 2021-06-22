# Kataw parser test case

## Input

`````js
for (async of => {};;);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "of",
                    "rawText": "of",
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 13,
                    "end": 16
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 19
                },
                "flags": 288,
                "start": 5,
                "end": 19
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 22,
                "end": 23
            },
            "flags": 80,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (async of => {};;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

for (async of =>  {}; ; );
```

### Diagnostics

```javascript
✔ No errors
```

