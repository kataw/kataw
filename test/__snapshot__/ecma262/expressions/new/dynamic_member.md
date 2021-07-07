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
                    "flags": 96,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 3,
                        "end": 7
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "bar",
                        "rawText": "\"bar\"",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 0,
                    "end": 14
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 2048,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "new Foo[\"bar\"]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
new Foo["\"bar\""];
```

### Diagnostics

```javascript
✔ No errors
```

