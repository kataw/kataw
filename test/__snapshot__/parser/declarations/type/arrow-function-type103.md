# Kataw parser test case

## Input

`````js
type a = ((q, x?:string )=> T) => T;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 15,
                    "end": 16
                },
                "consequent": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 16,
                    "end": 16
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 16,
                    "end": 17
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 17,
                    "end": 23
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 33,
                "end": 35
            },
            "flags": 16,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = ((q, x?:string )=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 12, end: 13
✖ Identifier expected - start: 16, end: 17
✖ Expected a `;` - start: 23, end: 25
✖ Declaration or statement expected - start: 25, end: 27
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 33

```

