# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default = 42
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
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 14,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 768,
                    "start": 16,
                    "end": 19
                },
                "flags": 256,
                "start": 14,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "text": "export default = 42",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 14, end: 16

```

