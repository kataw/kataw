# Kataw parser test case

## Input

`````js
export default async (x) => y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 6,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 24,
                    "start": 0,
                    "end": 27
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 22,
                        "end": 23
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 512,
                    "start": 14,
                    "end": 20
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 27,
                    "end": 29
                },
                "flags": 2304,
                "start": 14,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "export default async (x) => y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

