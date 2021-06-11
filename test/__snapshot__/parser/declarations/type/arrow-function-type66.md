# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [(x => T)]) => T) => T) => T) => T) => T;
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
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 11,
                    "end": 11
                },
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 11,
                    "end": 33
                },
                "flags": 32,
                "start": 11,
                "end": 33
            },
            "flags": 16,
            "start": 11,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 36,
                "end": 38
            },
            "flags": 16,
            "start": 36,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 42,
                "end": 44
            },
            "flags": 16,
            "start": 42,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 48,
                "end": 50
            },
            "flags": 16,
            "start": 48,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 54,
                "end": 56
            },
            "flags": 16,
            "start": 54,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 60,
                "end": 62
            },
            "flags": 16,
            "start": 60,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [(x => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a ')' to match the '(' token here - start: 33, end: 36
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 15, end: 36
✖ Expected a `;` - start: 38, end: 39
✖ Declaration or statement expected - start: 39, end: 42
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 48
✖ Expected a `;` - start: 50, end: 51
✖ Declaration or statement expected - start: 51, end: 54
✖ Expected a `;` - start: 56, end: 57
✖ Declaration or statement expected - start: 57, end: 60

```

