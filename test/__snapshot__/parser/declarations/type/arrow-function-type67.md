# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                    "end": 35
                },
                "flags": 32,
                "start": 11,
                "end": 35
            },
            "flags": 16,
            "start": 11,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 38,
                "end": 40
            },
            "flags": 16,
            "start": 38,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 44,
                "end": 46
            },
            "flags": 16,
            "start": 44,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 50,
                "end": 52
            },
            "flags": 16,
            "start": 50,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "flags": 16,
            "start": 56,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 62,
                "end": 64
            },
            "flags": 16,
            "start": 62,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a ')' to match the '(' token here - start: 35, end: 38
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 15, end: 38
✖ Expected a `;` - start: 40, end: 41
✖ Declaration or statement expected - start: 41, end: 44
✖ Expected a `;` - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 50
✖ Expected a `;` - start: 52, end: 53
✖ Declaration or statement expected - start: 53, end: 56
✖ Expected a `;` - start: 58, end: 59
✖ Declaration or statement expected - start: 59, end: 62

```

