# Kataw parser test case

## Options

`````js
{ module: true }
`````

## Input

`````js
await: 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "await",
                "rawText": "await",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "await",
                    "loop": false,
                    "isDuplicate": false,
                    "flags": 32,
                    "start": 0,
                    "end": 5
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "flags": 16,
                "start": 6,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": true,
    "source": "await: 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal - start: 0, end: 5
✖ Identifier expected.  'await' is a reserved word in module goal - start: 0, end: 6

```

