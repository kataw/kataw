# Kataw parser test case

## Input

`````js
new Foo["bar"]
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "start": 3,
                        "end": 7
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "bar",
                        "rawText": "\"bar\"",
                        "flags": 96,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "new Foo[\"bar\"]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

new  Foo"\"bar\""();
```

### Diagnostics

```javascript
✔ No errors
```

