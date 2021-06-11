# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [((x => T)]) => T) => T) => T) => T) => T;
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
                    "end": 34
                },
                "flags": 32,
                "start": 11,
                "end": 34
            },
            "flags": 16,
            "start": 11,
            "end": 34
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
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 43,
                "end": 45
            },
            "flags": 16,
            "start": 43,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 49,
                "end": 51
            },
            "flags": 16,
            "start": 49,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 55,
                "end": 57
            },
            "flags": 16,
            "start": 55,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 61,
                "end": 63
            },
            "flags": 16,
            "start": 61,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [((x => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a ')' to match the '(' token here - start: 32, end: 33
✖ Expected a ')' to match the '(' token here - start: 34, end: 37
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 15, end: 37
✖ Expected a `;` - start: 39, end: 40
✖ Declaration or statement expected - start: 40, end: 43
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 49
✖ Expected a `;` - start: 51, end: 52
✖ Declaration or statement expected - start: 52, end: 55
✖ Expected a `;` - start: 57, end: 58
✖ Declaration or statement expected - start: 58, end: 61

```

