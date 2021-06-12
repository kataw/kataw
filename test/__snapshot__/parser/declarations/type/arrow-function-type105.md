# Kataw parser test case

## Input

`````js
type a = ((q | y, x?:string )=> T) => T;
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
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "flags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
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
                    "start": 17,
                    "end": 19
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 19,
                    "end": 20
                },
                "consequent": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 20,
                    "end": 20
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 20,
                    "end": 21
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 21,
                    "end": 27
                },
                "flags": 32,
                "start": 17,
                "end": 27
            },
            "flags": 16,
            "start": 17,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 37,
                "end": 39
            },
            "flags": 16,
            "start": 37,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "type a = ((q | y, x?:string )=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 17
✖ Identifier expected - start: 20, end: 21
✖ Expected a `;` - start: 27, end: 29
✖ Declaration or statement expected - start: 29, end: 31
✖ Expected a `;` - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 37

```

