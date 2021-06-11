# Kataw parser test case

## Input

`````js
type a = (((x | ((y & z) => T) => T) => T) => T) => T;
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
                    "end": 24
                },
                "flags": 32,
                "start": 11,
                "end": 24
            },
            "flags": 16,
            "start": 11,
            "end": 24
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
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 39,
                "end": 41
            },
            "flags": 16,
            "start": 39,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 45,
                "end": 47
            },
            "flags": 16,
            "start": 45,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 51,
                "end": 53
            },
            "flags": 16,
            "start": 51,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & z) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a ')' to match the '(' token here - start: 24, end: 27
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 15, end: 27
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 33
✖ Expected a `;` - start: 35, end: 36
✖ Declaration or statement expected - start: 36, end: 39
✖ Expected a `;` - start: 41, end: 42
✖ Declaration or statement expected - start: 42, end: 45
✖ Expected a `;` - start: 47, end: 48
✖ Declaration or statement expected - start: 48, end: 51

```

