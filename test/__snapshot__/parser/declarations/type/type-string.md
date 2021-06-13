# Kataw parser test case

## Input

`````js
type T1 = string;
type T1 = number;
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 134234347,
                "flags": 64,
                "start": 9,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 17,
                "end": 25
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 22,
                "end": 25
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 25,
                "end": 27
            },
            "type": {
                "kind": 134234345,
                "flags": 64,
                "start": 27,
                "end": 34
            },
            "flags": 17,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type T1 = string;\ntype T1 = number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

