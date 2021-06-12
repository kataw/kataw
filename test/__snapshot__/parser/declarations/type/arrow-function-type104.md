# Kataw parser test case

## Input

`````js
type a = ((q, x)=> T) => T;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 134299649,
                    "text": "q",
                    "rawText": "q",
                    "flags": 96,
                    "start": 11,
                    "end": 12
                },
                "flags": 0,
                "start": 8,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 18,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = ((q, x)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 12, end: 13
✖ Expected a `;` - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 18
✖ Expected a `;` - start: 20, end: 21
✖ Declaration or statement expected - start: 21, end: 24

```

