# Kataw parser test case

## Input

`````js
type Foo = (string | number)
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
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 290,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 12,
                            "end": 18
                        },
                        {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 20,
                            "end": 27
                        }
                    ],
                    "flags": 2097152,
                    "start": 18,
                    "end": 27
                },
                "flags": 2097152,
                "start": 10,
                "end": 28
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type Foo = (string | number)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

