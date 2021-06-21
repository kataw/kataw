# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js

await (async () => {})(); // equivalent to: await((async () => {})())

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 8,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 16,
                                "end": 19
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 288,
                            "start": 8,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 23
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 268435488,
                    "start": 6,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": true,
    "source": "\nawait (async () => {})(); // equivalent to: await((async () => {})())\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

 await ;// equivalent to: await((async () => {})())
 
```

### Diagnostics

```javascript
✔ No errors
```

