# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async=null
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
                    },
                    "right": {
                        "kind": 138477575,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 25
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 14,
                    "end": 25
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 14,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "export default async=null",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
export default async = null;;
```

### Diagnostics

```javascript
✔ No errors
```

