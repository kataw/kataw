# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default 15;
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
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 768,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 134299649,
                "text": 15,
                "rawText": "15",
                "flags": 768,
                "start": 14,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "text": "export default 15;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

