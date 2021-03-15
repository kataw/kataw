# Kataw parser test case

## Input

`````js
class Foo extends Bar implements {
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Foo extends Bar implements {\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "Bar",
                    "rawText": "Bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 21
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "implementClauses": {
                "kind": 107,
                "clauses": [],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 32,
                "end": 32
            },
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 34,
                "end": 36
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

